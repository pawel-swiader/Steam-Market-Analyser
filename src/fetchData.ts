import Case from '../models/Case';
const case_html_element: string = "market_commodity_orders_header_promote";

export async function printCases() {
    const cases = await Case.findAll({
      attributes: ['case_id', 'case_name', 'case_link'],
    });
  
    try {
    cases.forEach((caseInstance) => {
      console.log(caseInstance.case_id, caseInstance.case_name, caseInstance.case_link);
    });
  } catch(error) {
    console.log('Fetch failed!');
    console.log('Error: ', error);
  }
}
  