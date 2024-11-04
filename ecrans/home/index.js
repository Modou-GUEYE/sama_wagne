/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './../home/style';
import { PADDING } from '../../outils/constante';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);

  // Fonction pour charger les données depuis AsyncStorage
  const loadData = async () => {
    try {
      const storedCategories = await AsyncStorage.getItem('categories');
      const storedRecipes = await AsyncStorage.getItem('recipes');

      if (storedCategories) {
        setCategories(JSON.parse(storedCategories));
      } else {
        // Si aucune donnée n'est stockée, j'utilisez des données par défaut
        const defaultCategories = [
          'petit-déjeuner',
          'Déjeuner',
          'Dîner',
          'Collation',
        ];
        setCategories(defaultCategories);
        await AsyncStorage.setItem(
          'categories',
          JSON.stringify(defaultCategories),
        );
      }

      if (storedRecipes) {
        setRecipes(JSON.parse(storedRecipes));
      } else {
        // Si aucune donnée n'est stockée, utilisez des données par défaut
        const defaultRecipes = [
          {
            title: 'Céeb jën',
            author: 'Modou',
            image: require('./../../assets/riz_au_poisson.webp'),
          },
          {
            title: 'Mbakhalou saloum',
            author: 'Modou',
            image: require('./../../assets/mbakhalou_saloum.jpg'),
          },
          {
            title: 'Yassa ginaar',
            author: 'Pape',
            image: require('./../../assets/Yassa-au-poulet.jpg'),
          },
        ];
        setRecipes(defaultRecipes);
        await AsyncStorage.setItem('recipes', JSON.stringify(defaultRecipes));
      }
    } catch (error) {
      console.log('Erreur lors du chargement des données :', error);
    }
  };

  // Appeler loadData lors du montage du composant
  useEffect(() => {
    loadData();
  }, []);
  const name = 'MODOU GUEYE';
  return (
    <View style={styles.container}>
      <View>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Sama waañ</Text>
          <TouchableOpacity>
          <Image
            source={require('./../../assets/profile.jpg')}
            style={styles.profileImage}
          />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.welcome}>Dalal ak jàmm {name}</Text>
        </View>
        {/* Barre de recherche */}
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={20} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher une recette"
          />
        </View>

        {/* Catégories */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>Voir Tout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoriesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}>
            {categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryItem}>
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
      <ScrollView style={{marginBottom:80, paddingTop:PADDING.vertical, flex:1}} showsVerticalScrollIndicator={false}>
        {/* Recettes */}
        <View style={styles.recipeContainer}>
          {recipes.map((recipe, index) => (
            <TouchableOpacity key={index} style={styles.recipeCard}>
              <Image source={recipe.image} style={styles.recipeImage} />
              <Text style={styles.recipeTitle}>{recipe.title}</Text>
              <Text style={styles.recipeAuthor}>{recipe.author}</Text>
              <FontAwesome
                name="bookmark-o"
                size={24}
                style={styles.favoriteIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
