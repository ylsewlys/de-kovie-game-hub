
import useGenres from '../hooks/useGenres';
import { HStack, List, ListItem, Image } from '@chakra-ui/react';


const GenreList = () => {

    const { data } = useGenres();

  return (
    <>
        <List>
            {data.map(genre => 
            <ListItem key={genre.id}>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={genre.image_background}></Image>
                </HStack>
            </ListItem>)}
        </List>
    </>
  )
}

export default GenreList