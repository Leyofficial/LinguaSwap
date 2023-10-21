export function stringToColor(string: string): string {
    let hash: number = 0;
    let i: number;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color: string = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}

export function stringAvatar(name: string): { sx: { width: number, height: number, bgcolor: string }, children: string } {
    return {
        sx: {
            width: 206,
            height: 206,
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0]}`,
    };
}
