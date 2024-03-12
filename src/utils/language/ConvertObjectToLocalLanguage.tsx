export const convert_object_to_local_language = (obj: { [key: string]: string | null } | null, field: string): string | null => {
    const language: string = localStorage.getItem("language") || "en";

    if (!obj || typeof obj !== 'object') {
        console.error('Invalid object provided.');
        return null;
    }

    return obj[field + '_' + language] ?? null;
};


const fakeArray: any[] = [
    { local: "en", name: 'Apple', name_fr: 'Pomme', description: 'A fruit' },
    { local: "ar", name: 'Banana', name_fr: 'Banane', description: 'Another fruit' },
];

export const convert_language_array_to_local = (array: any[], field: string): string[] => {
    const language: string = localStorage.getItem("language") || "en";

    return array
        .filter(item => item.local === language)
        .map(item => {
            const value = item[field];
            return value !== undefined ? value : null;
        });
}


export const convert_language_array_to_field = (array: any[], field: string,language:string): string[] => {

    return array
        .filter(item => item.local === language)
        .map(item => {
            const value = item[field];
            return value !== undefined ? value : null;
        });
}

console.log(convert_language_array_to_field(fakeArray, "name","ar")); 
