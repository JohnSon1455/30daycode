# 1. 把陣列 [1, 2, 3, 4, 5] 變成 [1, 3, 5, 7, 9]

# p [1, 2, 3, 4, 5].map{|x| x * 2 - 1} 

# 2. 把陣列 [1, 3, 4, 1, 7, nil, 7] 由小到大排序，並且移除 nil 以及重複的數字。

# p [1, 3, 4, 1, 11, nil, 7].compact.uniq.sort

# 3. 印出 1 ~ 100 之間所有的單數

# p (1..100).select{|x| x.odd?}

# for i in 1..100 do 
#     puts i if i.odd?
#   end
# 4. 計算 1 ~ 100 的總和

# p (1..100).sum

# 5. 印出 5 個小於 100 且不重複的亂數

# p (0..99).to_a.sample(5)

# 6. 陣列 a = [1, 2, 3, 1, 2, 1, 3, 1, 2, 3, 4, 5, 6]，請計算在陣列 a 中，每個數字出現的次數。

a = [1, 2, 3, 1, 2, 1, 3, 1, 2, 3, 4, 5, 6]
# p a.reduce(Hash.new(0)) { |x, y| x[y] += 1; x }
# p a = Hash[a.uniq.map {|i| [i, a.count(i)]}]
# p a = Hash[a.uniq.map {|i| ["#{i}有", a.count(i)]}
p a.sort.uniq.map {|i| ["#{i} 有", a.count(i)] + ["次"]}.join(" ")