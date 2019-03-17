function patternTest () {
    var reg = new RegExp(/(\d{6})(\d{1,7})/g);
    var pattern = '8';
    // console.log('ZZZZZZ-ZZZZZZZ pattern test :::::', pattern.replace(reg, '$1-$2'), pattern.replace(reg, '$1-$2') === '8');
    // pattern = '8309';
    // console.log('ZZZZZZ-ZZZZZZZ pattern test :::::', pattern.replace(reg, '$1-$2'), pattern.replace(reg, '$1-$2') === '8309');
    // pattern = '830926';
    // console.log('ZZZZZZ-ZZZZZZZ pattern test :::::', pattern.replace(reg, '$1-$2'), pattern.replace(reg, '$1-$2') === '830926');
    // pattern = '83112233';
    // console.log('ZZZZZZ-ZZZZZZZ pattern test :::::', pattern.replace(reg, '$1-$2'), pattern.replace(reg, '$1-$2') === '831122-33');
    // pattern = '8311223344';
    // console.log('ZZZZZZ-ZZZZZZZ pattern test :::::', pattern.replace(reg, '$1-$2'), pattern.replace(reg, '$1-$2') === '831122-3344');
    // var pattern = '8811223333442';
    // console.log('ZZZZZZ-ZZZZZZZ pattern test :::::', pattern.replace(reg, '$1-$2'), pattern.replace(reg, '$1-$2') === '881122-3333442');
    // pattern = '121331111112';
    reg = new RegExp(/(\d{3})(\d{1,2})(\d{1,7})/g);    
    // console.log('ZZZ-ZZ-ZZZZZZZ pattern test :::::',  pattern.replace(reg, '$1-$2-$3'), pattern.replace(reg, '$1-$2-$3') === '121-33-1111112');
    pattern = '1231';
    console.log('ZZZ-ZZ-ZZZZZZZ pattern test :::::',  pattern.replace(reg, '$1-'), pattern.replace(reg, '$1-') === '121-33-1111112');
}