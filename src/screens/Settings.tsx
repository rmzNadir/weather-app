import React from 'react';
import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Spacer,
  VStack,
  Text,
} from 'native-base';
import ToggleTheme from '../components/ToggleTheme';

const City = () => {
  return (
    <ScrollView
      flex={1}
      _dark={{ bg: 'muted.900' }}
      _light={{ bg: 'muted.50' }}
      stickyHeaderIndices={[0]}>
      <VStack
        space='4'
        _dark={{ bg: 'muted.900' }}
        _light={{ bg: 'muted.50' }}
        px='4'
        pt='6'
        pb='4'>
        <Flex flexDirection='row' justifyContent='space-between'>
          <Heading color='primary.500' size='xl'>
            Información
          </Heading>
          <Spacer />
          <ToggleTheme />
        </Flex>
        <HStack space='4'>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/66232347?v=4',
            }}
            alt='Github avatar'
            size='xl'
          />
          <Divider orientation='vertical' />
          <VStack space='2' justifyContent='flex-end'>
            <HStack alignItems='center' space='2'>
              <Icon as={FontAwesome5} name='github' color='primary.500' />
              <Pressable
                onPress={async () =>
                  Linking.openURL('https://github.com/rmzNadir')
                }>
                <Heading
                  underline
                  _dark={{ color: 'muted.200' }}
                  _light={{
                    color: 'muted.600',
                  }}>
                  rmzNadir
                </Heading>
              </Pressable>
            </HStack>
            <HStack alignItems='center' space='2'>
              <Icon
                as={MaterialCommunityIcons}
                name='source-repository'
                color='primary.500'
              />
              <Pressable
                onPress={async () =>
                  Linking.openURL('https://github.com/rmzNadir/weather-app')
                }>
                <Heading
                  underline
                  _dark={{ color: 'muted.200' }}
                  _light={{
                    color: 'muted.600',
                  }}>
                  Weather-App
                </Heading>
              </Pressable>
            </HStack>
          </VStack>
        </HStack>
      </VStack>

      <Box py='2' px='4'>
        <Divider mb='2' />
        <Heading color='primary.500'>Tecnologías usadas</Heading>
        <VStack mt='2' space='2'>
          <HStack space='2' alignItems='center'>
            <Icon
              as={AntDesign}
              size='xs'
              name='caretright'
              color='primary.500'
            />
            <Text>React Native</Text>
          </HStack>
          <HStack space='2' alignItems='center'>
            <Icon
              as={AntDesign}
              size='xs'
              name='caretright'
              color='primary.500'
            />
            <Text>TypeScript</Text>
          </HStack>
          <HStack space='2' alignItems='center'>
            <Icon
              as={AntDesign}
              size='xs'
              name='caretright'
              color='primary.500'
            />
            <Text>Jest</Text>
          </HStack>
          <HStack space='2' alignItems='center'>
            <Icon
              as={AntDesign}
              size='xs'
              name='caretright'
              color='primary.500'
            />
            <Text>Expo</Text>
          </HStack>
          <HStack space='2' alignItems='center'>
            <Icon
              as={AntDesign}
              size='xs'
              name='caretright'
              color='primary.500'
            />
            <Text>ESLint</Text>
          </HStack>
          <HStack space='2' alignItems='center'>
            <Icon
              as={AntDesign}
              size='xs'
              name='caretright'
              color='primary.500'
            />
            <Text>Prettier</Text>
          </HStack>
          <HStack space='2' alignItems='center'>
            <Icon
              as={AntDesign}
              size='xs'
              name='caretright'
              color='primary.500'
            />
            <Text>React Test Renderer</Text>
          </HStack>
          <HStack space='2' alignItems='center'>
            <Icon
              as={AntDesign}
              size='xs'
              name='caretright'
              color='primary.500'
            />
            <Text>NativeBase</Text>
          </HStack>
          <HStack space='2' alignItems='center'>
            <Icon
              as={AntDesign}
              size='xs'
              name='caretright'
              color='primary.500'
            />
            <Text>Axios</Text>
          </HStack>
          <HStack space='2' alignItems='center'>
            <Icon
              as={AntDesign}
              size='xs'
              name='caretright'
              color='primary.500'
            />
            <Text>dotenv</Text>
          </HStack>
          <HStack space='2' alignItems='center'>
            <Icon
              as={AntDesign}
              size='xs'
              name='caretright'
              color='primary.500'
            />
            <Text>Moment.js</Text>
          </HStack>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default City;
