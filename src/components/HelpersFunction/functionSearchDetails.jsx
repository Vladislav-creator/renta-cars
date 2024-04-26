

    
    // Проверяем, существуют ли массивы accessories и functionalities
    const functionSearchDetails = (car, phrases) => {
        // Проверяем, существуют ли массивы accessories и functionalities
        if (car.accessories && car.functionalities && phrases) {
            // Приводим элементы массивов к нижнему регистру для сравнения без учета регистра
            const accessoriesLowerCase = car.accessories.map(accessory => accessory.toLowerCase());
            const functionalitiesLowerCase = car.functionalities.map(functionality => functionality.toLowerCase());
    
            // Проходим по каждой фразе из массива phrases и проверяем ее наличие в массивах accessories и functionalities
            for (const phrase of phrases) {
                const phraseLowerCase = phrase.toLowerCase();
                if (accessoriesLowerCase.some(accessory => accessory.includes(phraseLowerCase)) || functionalitiesLowerCase.some(functionality => functionality.includes(phraseLowerCase))) {
                    // Возвращаем первую найденную фразу и прекращаем дальнейший поиск
                    return phrase;
                }
            }
    
            // Если ни одна из фраз не найдена, возвращаем соответствующее сообщение
            return "Фразы не найдены";
        } else {
            return "Массивы accessories и/или functionalities и/или phrases отсутствуют";
        }
    }
export default functionSearchDetails;