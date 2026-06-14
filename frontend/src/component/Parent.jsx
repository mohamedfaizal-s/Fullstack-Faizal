import Child from "./Child"

const Parent = () => {
  return (
    <div>
      <Child name="faizal"
      age={18}
      isActive={true}
      mark={[99,98,97,96,95]}
      address={{
        pincode:654321,
        email:"faizal223@gmail.com",
        mobile:9876543210
      }}
      />
      <Child name="mohamed"
      age={18}
      isActive={true}
      mark={[99,98,97,96,95]}
      address={{
        pincode:654321,
        email:"faizal223@gmail.com",
        mobile:9876543210
      }}
      />
      </div>
  )
}
export default Parent