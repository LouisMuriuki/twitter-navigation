import Colors from "../themes/colors"

const getLightColor=(colorScheme:string)=>{
   return colorScheme === "dark" ? Colors.white : Colors.dark
}
const getDarkColor=(colorScheme:string)=>{
   return colorScheme === "dark" ? Colors.dark : Colors.white;
}

export {getDarkColor,getLightColor}