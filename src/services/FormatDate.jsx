export const formatDate = (date, format = 'yyyy-MM-dd') =>{
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    const [month, day, year] = formatter.format(new Date(date)).split('/');

    return format
        .replace('yyyy', year)
        .replace('MM', month.padStart(2, '0'))
        .replace('dd', day.padStart(2, '0'));
}