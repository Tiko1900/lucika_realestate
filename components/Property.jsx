import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar, Badge, useColorModeValue  } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { MdStar } from 'react-icons/md';
import millify from 'millify';

import DefaultImage from '../assets/images/house.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID, purpose, } }) => (
    <Link href={`/property/${externalID}`} passHref>
       <Box m="5" p="2" maxW="320px" borderWidth="1px" bg={useColorModeValue("white", "gray.800")} boxShadow="2xl">
      <Image src={coverPhoto.url} width={400} height={260}/>
      <Flex align="center" justifyContent="space-between" mt={2} >
        <Box d="flex" alignItems="center" color="green" fontWeight="bold">
          {isVerified && ((
            <Text d="flex" alignItems="center" mr="2"><GoVerified /> Verified &bull;</Text>
          ))}
          <Text>{purpose}</Text>
        </Box>
        <Box ml="0">
            <Avatar size="sm" src={agency?.logo?.url}/>
        </Box>
      </Flex>
      <Text fontSize="lg">
          {title.length > 60 ? `${title.substring(0, 60)}...` : title}
      </Text>
      <Text mt={2} fontWeight="bold" fontSize="md" color="orange.400">AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
      <Flex mt={2} alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
        {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
      </Flex>
    </Box>
    </Link>
);

export default Property;