import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import {
  FlatList,
  useToast,
  Box,
  useTheme,
  useColorModeValue,
} from 'native-base';
import { Keyboard, RefreshControl } from 'react-native';
import { useDebounce } from 'use-debounce/lib';
import CitiesListHeader from '../components/CitiesListHeader';
import CitiesListItem from '../components/CitiesListItem';
import { City, CitiesScreenNavigation } from '../types';

interface CitiesProps {
  navigation: CitiesScreenNavigation;
}

const Cities = ({ navigation }: CitiesProps) => {
  const [cities, setCities] = useState<City[]>([]);
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search, 150);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const { colors } = useTheme();

  const getCities = useCallback(
    async () => {
      try {
        setLoading(true);
        const { data } = await axios.get<City[]>(
          `https://search.reservamos.mx/api/v2/places?q=${debouncedSearch}`,
        );
        setCities(data);
      } catch (e) {
        toast.show({
          placement: 'top',
          status: 'error',
          title: 'Error',
          description:
            'No pudimos cargar los destinos, por favor intenta de nuevo',
        });
      } finally {
        setLoading(false);
      }
    },
    // Adding toast to the dependency array will cause an infinite re-render loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debouncedSearch],
  );

  useEffect(() => {
    getCities();
  }, [getCities]);

  return (
    <Box flex={1} _dark={{ bg: 'muted.900' }} _light={{ bg: 'muted.50' }}>
      <FlatList
        removeClippedSubviews
        initialNumToRender={5}
        onScrollBeginDrag={Keyboard.dismiss}
        stickyHeaderIndices={[0]}
        refreshControl={
          <RefreshControl
            colors={[colors.primary[400], colors.primary[500]]}
            progressBackgroundColor={useColorModeValue(
              colors.muted[50],
              colors.muted[800],
            )}
            refreshing={loading}
            onRefresh={async () => getCities()}
          />
        }
        ListHeaderComponent={
          <CitiesListHeader
            search={search}
            setSearch={setSearch}
            navigation={navigation}
          />
        }
        keyExtractor={(item) => String(item.id)}
        renderItem={(info) => <CitiesListItem {...info} />}
        data={cities}
      />
    </Box>
  );
};

export default Cities;
