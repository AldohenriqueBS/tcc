const XLSX = window.XLSX;

/**
 * Converte um array de objetos JSON para uma planilha Excel e inicia o download.
 * @param {Array<Object>} data - Os dados a serem exportados.
 * @param {string} filename - O nome do arquivo Excel (sem a extensão .xlsx).
 * @param {string} sheetName - O nome da aba na planilha.
 */
window.exportToExcel = function(data, filename, sheetName = 'Dados') {
    if (!data || data.length === 0) {
        console.error("Nenhum dado para exportar.");
        alert("Nenhum dado para exportar.");
        return;
    }

    // Cria uma nova planilha a partir do array de objetos
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Cria um novo livro de trabalho
    const workbook = XLSX.utils.book_new();
    
    // Adiciona a planilha ao livro de trabalho
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    // Escreve o arquivo e inicia o download
    XLSX.writeFile(workbook, `${filename}.xlsx`);
}

/**
 * Converte um array de objetos JSON para uma planilha Excel e inicia o download.
 * Versão que aceita cabeçalhos personalizados e formatação.
 * @param {Array<Object>} data - Os dados a serem exportados.
 * @param {string} filename - O nome do arquivo Excel (sem a extensão .xlsx).
 * @param {string} sheetName - O nome da aba na planilha.
 * @param {Object} headerMap - Mapeamento de chaves do objeto para nomes de coluna. Ex: { 'oldKey': 'Novo Nome de Coluna' }
 */
window.exportToExcelWithHeaderMap = function(data, filename, sheetName = 'Dados', headerMap = {}) {
    if (!data || data.length === 0) {
        console.error("Nenhum dado para exportar.");
        alert("Nenhum dado para exportar.");
        return;
    }

    // 1. Mapear os dados para os novos cabeçalhos
    const mappedData = data.map(item => {
        const newItem = {};
        for (const key in item) {
            if (Object.prototype.hasOwnProperty.call(item, key)) {
                const newKey = headerMap[key] || key;
                newItem[newKey] = item[key];
            }
        }
        return newItem;
    });

    // 2. Criar a planilha
    const worksheet = XLSX.utils.json_to_sheet(mappedData);

    // 3. Criar e escrever o arquivo
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    XLSX.writeFile(workbook, `${filename}.xlsx`);
}
