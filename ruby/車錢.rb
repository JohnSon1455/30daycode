def calc_parking_fee(vehicle_type, parking_hour)
    # 實作內容
    fee = 0
    parking_hour = parking_hour.ceil
    case vehicle_type
    when :motocycle
        fee = 20
    when :car
      if parking_hour <= 2
        fee = parking_hour.ceil * 40
      else
        fee = 80 + (parking_hour-2)*30
      end

      
      if fee>= 500
        fee = 500
      end
    end
    return fee
  end
  
  puts calc_parking_fee(:motocycle, 2)  # 印出 20
  puts calc_parking_fee(:motocycle, 8)  # 印出 20
  
  puts calc_parking_fee(:car, 1.5)      # 印出 80
  puts calc_parking_fee(:car, 4)        # 印出 140
  puts calc_parking_fee(:car, 5.5)      # 印出 200
  puts calc_parking_fee(:car, 18)       # 印出 500