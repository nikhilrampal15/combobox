const useOptions = ((options: string[], input: string) => {
    return options.filter( option => {
        const item = option.split(' ')[1].slice(0, input.length);
        return item.toLowerCase() === input.toLowerCase();
    });
});

export default useOptions;