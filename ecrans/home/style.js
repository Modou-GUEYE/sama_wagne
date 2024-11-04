import { StyleSheet } from 'react-native';
import { COLORS, PADDING, TEXT_SIZE } from '../../outils/constante';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  greeting: {
    fontSize: TEXT_SIZE.title_1,
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: TEXT_SIZE.title_3,
    color: '#888',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.fourth,
    borderRadius: 20,
    paddingHorizontal: PADDING.horizontal,
    marginTop: 20,
    marginBottom: 10,
  },
  searchIcon: {
    color: COLORS.second,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  categoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  categoriesTitle: {
    fontSize: TEXT_SIZE.title_2,
    fontWeight: 'bold',
  },
  viewAll: {
    color: COLORS.first,
  },
  categoryScroll: {
    flexDirection: 'row',
    marginTop: 10,
  },
  categoryItem: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.first,
    marginRight: 10,
  },
  categoryText: {
    color: COLORS.first,
  },
  selectedCategory: {
    backgroundColor: COLORS.first,
  },
  selectedText: {
    color: COLORS.white,
  },
  recipeContainer: {
    flexDirection: 'column',
  },
  recipeCard: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    position: 'relative',
  },
  recipeImage: {
    width: '100%',
    height: 150,
  },
  recipeTitle: {
    fontSize: TEXT_SIZE.title_3,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 10,
  },
  recipeAuthor: {
    fontSize: 14,
    color: '#888',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  favoriteIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: COLORS.first,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 12,
    padding: 4,
  },
});
