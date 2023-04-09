export function getTableName(caseName: string): string {
  const tableName = caseName
                    .toLowerCase()
                    .replace(/:/g, '')
                    .replace(/ /g, '_')
                    .replace(/&/g, 'and');

  return tableName;
}