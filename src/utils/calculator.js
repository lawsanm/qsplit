export function calculateSplit(users, deliveryFee, discountRules) {
  const { minOrder, discountPercentage, maxDiscount } = discountRules;
  const delivery = Number(deliveryFee) || 0;
  
  const totalOrder = users.reduce((sum, u) => sum + (Number(u.amount) || 0), 0);
  
  let actualDiscount = 0;
  if (totalOrder > 0 && totalOrder >= (Number(minOrder) || 0)) {
    if (Number(discountPercentage) > 0) {
      const rawDiscount = (totalOrder * Number(discountPercentage)) / 100;
      actualDiscount = Number(maxDiscount) > 0 ? Math.min(rawDiscount, Number(maxDiscount)) : rawDiscount;
    } else if (Number(maxDiscount) > 0) {
      actualDiscount = Number(maxDiscount);
    }
  }

  const deliveryPerPerson = users.length > 0 ? delivery / users.length : 0;
  
  let splitData = users.map(user => {
    const amount = Number(user.amount) || 0;
    const proportion = totalOrder > 0 ? amount / totalOrder : 0;
    const discountShare = proportion * actualDiscount;
    const exactPayable = amount - discountShare + deliveryPerPerson;
    
    return {
      ...user,
      amount,
      discountShare,
      deliveryShare: deliveryPerPerson,
      exactPayable,
      finalPayable: Math.floor(exactPayable)
    };
  });

  // Calculate remainder to distribute
  const currentTotalCalculated = splitData.reduce((sum, u) => sum + u.finalPayable, 0);
  const targetTotal = Math.round(totalOrder - actualDiscount + delivery);
  
  let remainderToDistribute = targetTotal - currentTotalCalculated;
  
  if (remainderToDistribute > 0) {
    // Sort users by lowest spenders first initially.
    // We clone the array to not mutate the mapped array's index while sorting.
    let sortedIndices = splitData
        .map((u, i) => ({ ...u, originalIndex: i }))
        .sort((a, b) => a.amount - b.amount || a.id.localeCompare(b.id));

    for (let i = 0; i < remainderToDistribute; i++) {
        if (sortedIndices.length > 0) {
           const idx = sortedIndices[i % sortedIndices.length].originalIndex;
           splitData[idx].finalPayable += 1;
        }
    }
  }

  return {
    totalOrder,
    actualDiscount,
    deliveryTotal: delivery,
    targetTotal,
    splitData
  };
}
