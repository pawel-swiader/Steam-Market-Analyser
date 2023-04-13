export async function saveToDatabase(caseName: string, CaseModel: any, priceValue: number, quantityValue: number) {
  if (priceValue !== null && quantityValue !== null) {

    const lastLogId = await CaseModel.max('log_id');
    const logId = lastLogId ? lastLogId + 1 : 1;
    const now = new Date();
    const formattedDate = now.toISOString();
    
    const price = parseFloat(priceValue.toString().replace('$', '')).toFixed(2);
    const quantity = parseInt(quantityValue.toString());

    console.log(price);

    await CaseModel.upsert({
      log_id: logId,
      fetch_date: formattedDate,
      case_price_USD: price,
      case_quantity: quantity,
    });

    // console.log(`
    //   \n
    //   case_name      ---> ${caseName} \n
    //   log_id         ---> ${logId} \n
    //   fetch_date     ---> ${now} \n
    //   case_price_USD ---> ${price} \n
    //   case_quantity  ---> ${quantity} 
    //   \n
    //   `);
  } 
}