export default function getRandomColor() {
    const getRandomHex = (min, max) => {
        const value = Math.floor(Math.random() * (max - min + 1)) + min;
        return value.toString(16).padStart(2, '0');
    };

    const min = 0x40;
    const max = 0xAD;

    const r = getRandomHex(min, max);
    const g = getRandomHex(min, max);
    const b = getRandomHex(min, max);

    return `#${r}${g}${b}`;
}  