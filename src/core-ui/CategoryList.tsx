import React from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  FlatList,
  TouchableOpacity,
  FlatListProps,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Text } from 'exoflex';

import { COLORS } from '../constants/colors';
import { FONT_SIZE } from '../constants/fonts';
import { CategoryItem } from '../types/types';

type BaseProps = FlatListProps<CategoryItem>;

type Props = Omit<BaseProps, 'data' | 'renderItem' | 'numColumns'> & {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  categories: Array<CategoryItem>;
  onSelect: (category: CategoryItem) => void;
};

function Separator() {
  return <View style={styles.separator} />;
}

export default function CategoryList(props: Props) {
  let {
    containerStyle,
    textStyle,
    categories,
    onSelect,
    ...otherprops
  } = props;

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={categories}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.categoryItemContainer,
            // !item.image && styles.color,
            containerStyle,
          ]}
          onPress={() => onSelect(item)}
        >
          {item.image ? (
            [<ImageBackground
              source={{ uri: item.image }}
              imageStyle={[styles.circle,]}
              style={styles.circle}
            >
            </ImageBackground>,
            <Text
              numberOfLines={2}
              ellipsizeMode='tail'
              weight="medium"
              style={[styles.categoryItemText, textStyle]}
            >
              {item.title}
            </Text>]
          ) : (
            <View>
              <View style={[
                styles.color,
                styles.circle,
              ]}>
              </View>
              <Text
                weight="medium"
                numberOfLines={2}
                style={[
                  styles.categoryItemText,
                  textStyle]}
                ellipsizeMode={'tail'}>
                {item.title}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={Separator}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.flatlistContainer}
      {...otherprops}
    />
  );
}

const styles = StyleSheet.create({
  categoryItemContainer: {
    flex: 1,
    height: 120,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  circle:{
    alignSelf:'center',
    height: Dimensions.get('window').width * 0.11,
    width: Dimensions.get('window').width * 0.11,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
  },
  borderRadius: {
    borderRadius: 2,
  },
  color: {
    backgroundColor: COLORS.primaryColor,
  },
  categoryItemText: {
    marginHorizontal: 10,
    color: COLORS.black,
    fontSize: FONT_SIZE.medium,
    textAlign:'center',
  },
  separator: {
    marginHorizontal: 6,
  },
  flatlistContainer: {
    paddingStart: 24,
    paddingEnd: 24,
  },
});
