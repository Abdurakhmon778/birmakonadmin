import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator
} from 'react-native';
import { SearchIcon } from '../../../../assets/icons/icon';
import Header from '../../../../components/Header';
import { COLORS } from '../../../../constants/color';
import useProducts from '../../../../hooks/useProductscards';
import Loading from '../../../../loading/Loading';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { clearRequest, ProductAsyncRequests } from '../../../../redux/slices/product';
import { onGetProducts, onPressNextPage, changeVisibleModalProduct, onDeleteProduct } from '../../../../redux/slices/productCards';
import { statusType } from '../../../../redux/types/statusType';
import Product from './components/product';
import SortModal from './components/SortModal';
import { styles } from './style';

import { Button } from "@react-native-material/core"
import { Dialog, Provider } from 'react-native-paper';
import { services } from '../../../../services';
import Select from '../../../../components/common/Select';
import { FilterModal } from './components/FilterModal';

const ProductCardsView = () => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch: any = useAppDispatch()
  const productCardsState = useAppSelector((state) => state.productCards)
  const navigation = useNavigation();
  const [deleteItemNum, setDeleteItemNum] = useState<null | number>(null)
  const [categoryList, setCategoryList] = useState([])
  const [value, setValue] = useState("Выбрать Категория")
  const [visible, setVisible] = useState(false);

  const {
    category,
    setIds,
    setCategory
  } = useProducts()

  useEffect(() => {
    onGetProducts && dispatch(onGetProducts())
  }, [])

  useEffect(() => {
    async function getCategory() {
      try {
        const res = await services.product.category()
        const data = await res.data?.data
        setCategoryList(data)
      } catch (error) {
        console.log(error)
      }
    }

    getCategory()
  }, [])

  if (productCardsState.isOneLoading) return <Loading title='идет погрузка товара.' />

  const onModalVisibleHandler = (id: number) => {
    dispatch(changeVisibleModalProduct(true))
    setDeleteItemNum(id)
  }

  const renderProducts = () => {
    return (
      <>
        {
          productCardsState.products_list.filter(p => p?.name.toUpperCase().includes(searchInput.toUpperCase())).map((item, index) => {

            return (
              <Product onModalVisibleHandler={onModalVisibleHandler} {...item} key={index.toString()} index={index} />
            )
          })
        }
      </>
    )
  }


  function onSelectItem(item: any) {
    console.log(item)
    setValue(item.name)
    setVisible(false)
    dispatch(onGetProducts(item.id))
  }



  return (
    <SafeAreaView style={styles.container}>
      <Header title="Карточки товаров" />
      {
        productCardsState.visibleModal && (
          <View
            style={{
              zIndex: 23,
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Provider >
              <Dialog style={{ backgroundColor: "#fff" }} visible={productCardsState.visibleModal} onDismiss={() => dispatch(changeVisibleModalProduct(false))}>
                <Dialog.Title style={{ color: "#000" }}>Удилить</Dialog.Title>
                <Dialog.Content >
                  <Text style={{ color: "#666", fontSize: 16, lineHeight: 24 }}>
                    Вы действительно хотите удилить товар ?
                  </Text>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button
                    title="Нет"
                    compact
                    variant="text"
                    onPress={() => dispatch(changeVisibleModalProduct(false))}
                    color="#131E3D"
                  />
                  <Button
                    title="Да"
                    compact
                    variant="text"
                    color="#131E3D"
                    onPress={() => {
                      dispatch(changeVisibleModalProduct(false))
                      if (deleteItemNum === null || deleteItemNum < 0) return;
                      dispatch(onDeleteProduct(deleteItemNum))
                    }}
                  />
                </Dialog.Actions>
              </Dialog>
            </Provider>
          </View>
        )
      }

      {visible && <FilterModal onSelectItem={onSelectItem} categoryList={categoryList} visible={visible} setVisible={setVisible} />}


      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerSectionView}>
          <TouchableOpacity
            style={styles.containerBoxView}
            onPress={() => {
              dispatch(clearRequest())
              navigation.navigate('ProductCards2')
            }}
          >
            <Text style={styles.containerSectionText}>Добавить товар</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            marginHorizontal: 10,
            paddingHorizontal: -20,
          }}>
          <TextInput
            placeholder="Поиск по товаром"
            value={searchInput}
            onChangeText={setSearchInput}
            style={styles.textInput}
            placeholderTextColor='#000'
          />
          <View style={styles.iconView}>
            <SearchIcon />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            // alignItems: "center",
            justifyContent: "center",
          }}>
          <View style={{ zIndex: 4, flex: 1 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.innerView, {
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
                justifyContent: 'space-between'
              }]}
            >
              <Text style={styles.innerText}>сортировать</Text>
            </TouchableOpacity>
          </View>

          <View style={{ zIndex: 3, flex: 1 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setVisible(true)}
              style={[styles.innerView, {
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
                justifyContent: 'space-between'
              }]}
            >
              <Text style={styles.innerText}>{value}</Text>
            </TouchableOpacity>

            {/* <Select
              data={categoryList.map(({ name }) => name)}
              title={'Категория'}
              defaultButtonText={'Выбрать Категория'}
              onSelect={(selectedName: any) => {
                console.log(selectedName)
              }}
            /> */}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'space-between',
            flexWrap: 'wrap'
          }}>
          {/* Render Products */}
          {renderProducts()}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.buttonColor,
            justifyContent: 'space-between',
            marginHorizontal: 15,
            alignItems: 'center',
            paddingVertical: 15,
            borderRadius: 5,
            marginTop: 30,
          }}
          onPress={() => dispatch(onPressNextPage())}
        >
          {
            productCardsState.products_status.status === statusType.pending ? <ActivityIndicator color={"#eee"} /> : <Text style={{ color: COLORS.white }}> {productCardsState.isNextPagePressed ? "Далее" : "Других товаров не найдено"} </Text>
          }
        </TouchableOpacity>

        <View style={{ marginBottom: 160 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductCardsView;
