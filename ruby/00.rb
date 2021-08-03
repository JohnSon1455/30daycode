def aa(x)
    yield x
end
aa("ll"){ |a|
    puts a
}
1.upto(10){|n|
   puts n
}
