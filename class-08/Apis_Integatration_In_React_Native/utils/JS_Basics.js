const App = () => {

    let arr = [1, 2,3, 4, 5]
    useEffect(() => {
  
      const map_data =  arr.map((e)=> {
        return {num:e}
      })
      const reduce_data =  arr.reduce((total, num)=> {
        return total + num
      })
      const data =  arr.filter((e)=> e % 2 === 1)
  
      console.log(reduce_data);
  
    }, [])
    
    return (
      <View>
        {arr.map((e)=> <Text>{e}</Text>)}
      </View>
    )
  }