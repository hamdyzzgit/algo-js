Algorithm analyze_sentence
VAR
    INTEGER := 0;
    word_counter : INTEGER := 1;
    vowel_counter : INTEGER := 0;
    char : CHAR;
BEGIN
    WRITE("Enter a character (end with a point): ");
    READ(char);

    WHILE (char <> '.') DO
        length_counter := length_counter + 1;

        IF (char = 'a' OR char = 'e' OR char = 'i' OR char = 'o' OR char = 'u' OR
            char = 'A' OR char = 'E' OR char = 'I' OR char = 'O' OR char = 'U') THEN
            vowel_counter := vowel_counter + 1;
        END_IF

        IF (char = ' ') THEN
            word_counter := word_counter + 1;
        END_IF

        READ(char);
    END_WHILE
    length_counter := length_counter + 1;
    WRITE("Length: ", length_counter);
    WRITE("Words: ", word_counter);
    WRITE("Vowels: ", vowel_counter);
END
En