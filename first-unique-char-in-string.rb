# @param {String} s
# @return {Integer}
def first_uniq_char(s)
    chars = Hash.new(0)

    s.each_char do |str|
        chars[str] = chars[str] + 1
    end

    s.each_char.with_index do |str, i|
        return i if chars[str] == 1
    end

    return -1
end