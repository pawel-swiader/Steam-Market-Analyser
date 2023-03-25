import Case from '../models/Case';

// Function which adds case to 'cases' table in database
export async function addCase() {
  const newCase = await Case.create({
    case_name: 'case name',
    case_link: 'case link',
    case_html_element: 'case element',
  });
  console.log("New case created!");
  console.log(newCase.case_id, newCase.case_name, newCase.case_link, newCase.case_html_element);
}