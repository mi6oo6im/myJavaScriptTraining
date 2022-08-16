H = (C == 0)           // Is C zero?
    ? null             // Then return `null`, else ...
    : (V == r)         // Is V equal to r?
    ? (g - b) / C      // Then return this value, else ...
    : (V == g)         // Is V equal to g?
    ? (b - r) / C + 2  // Then return this value
    : (r - g) / C + 4; // Otherwise fall back to this default value