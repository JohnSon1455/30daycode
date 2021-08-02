p [5, 2, 1, 10, 7, 89, 100].reduce(0) { |acc, cv|
#    if  acc > cv
#        acc
#    else
#        cv
#    end
   acc > cv ? acc: cv
}
