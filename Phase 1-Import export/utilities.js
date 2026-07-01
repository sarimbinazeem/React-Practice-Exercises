export function isEven(number)
{
    return number%2 === 0;
}

export function capitalize(text)
{
     if (!text) return '';
     return text.charAt(0).toUpperCase() + text.slice(1);
}

export function calculatePercentage(obtained,total)
{
    return obtained/total;
}