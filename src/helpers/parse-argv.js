export const parseArgv = () => {
    const args = process.argv.slice(2);

    const result = args.reduce((previous_value, current_value) => {
        if (current_value && current_value.startsWith("--")) {
            const [key, value] = current_value.slice(2).split("=");
            previous_value[key] = value;
        }
        return previous_value;
    }, {});

    return result;
};
