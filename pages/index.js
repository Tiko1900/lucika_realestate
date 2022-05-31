import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react'; 

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';

export default function Home({ propertiesShow }) {

  return (
    <Box>
      <Flex flexWrap="wrap" justifyContent="center">
        {propertiesShow.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
    </Box>
  )
}


export async function getStaticProps() {
  const propertyShow = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002,6020`);

  return {
    props: {
      propertiesShow: propertyShow?.hits,
    }
  }
}