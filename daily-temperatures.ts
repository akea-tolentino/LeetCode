function dailyTemperatures(temperatures: number[]): number[] {
    const stack: number[] = [];
    const results: number[] = new Array(temperatures.length).fill(0);

    for (let i: number = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length -1]]) {
            const index: number | undefined = stack.pop();
            if (index) results[index] = i - index;
        }
        stack.push(i);
    }

    return results
};