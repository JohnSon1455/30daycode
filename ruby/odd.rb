# list = [1, 2, 3, 4, 5]
def my_select(list)
  result = []
  list.each do |i|
  # result << i if i % 2 == 1
    result << i if yield(i)
  end
  result
end
p my_select([1, 2, 3, 4, 5]){ |i| i.odd? } #印出[1, 3, 5]

add_one = proc {|n| n + 1}
add_two = ->(n){n + 2}
add_three = lambda {|n| n + 3}

p add_one.(2)
p add_two[2]
p add_three.call(2)
p add_two.===(3)