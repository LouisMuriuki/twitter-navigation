import { StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { useRouter } from 'expo-router'

export const CustomDrawerContent = (props:any) => {
const router=useRouter()  
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={()=>router.replace('/')}  />

    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent

const styles = StyleSheet.create({})