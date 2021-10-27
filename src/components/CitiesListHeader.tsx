import React, { Dispatch, SetStateAction } from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import {
  Flex,
  Heading,
  HStack,
  Input,
  IconButton,
  Icon,
  Box,
  Spacer,
} from 'native-base';
import { CitiesScreenNavigation } from '../types';

interface CitiesListHeaderProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  navigation: CitiesScreenNavigation;
}

const CitiesListHeader = ({
  search,
  setSearch,
  navigation,
}: CitiesListHeaderProps) => {
  return (
    <Box px='4' py='6' _dark={{ bg: 'muted.900' }} _light={{ bg: 'muted.50' }}>
      <Flex flexDirection='row' mb='4' justifyContent='space-between'>
        <Heading color='primary.500' size='xl'>
          Destinos
        </Heading>
        <Spacer />
        <IconButton
          onPress={() => navigation.navigate('Settings')}
          borderRadius='full'
          variant='solid'
          _icon={{
            size: 'sm',
            as: FontAwesome5,
            name: 'info',
            textAlign: 'center',
          }}
        />
      </Flex>

      <HStack space={2} height='12'>
        <Input
          flex={1}
          placeholder='Buscar'
          onChangeText={(v) => setSearch(v)}
          value={search}
        />
        {/* Shortcircuit won't work here, it casts false to text and then it throws a "text must be inside <Text></Text>" error */}
        {search ? (
          <IconButton
            borderRadius='sm'
            variant='solid'
            onPress={() => setSearch('')}
            icon={<Icon as={AntDesign} name='close' color='warmGray.50' />}
          />
        ) : null}
      </HStack>
    </Box>
  );
};

export default CitiesListHeader;
