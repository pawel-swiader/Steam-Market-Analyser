import Case from '../models/Case';

export async function getCases() {
    const cases = await Case.findAll({
        attributes: ['case_link', 'case_name'],
    });
    
    return cases;
}