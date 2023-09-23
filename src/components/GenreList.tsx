
import useGenres from '../hooks/useGenres';
import { HStack, List, ListItem, Image, Text, Spinner, Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import getCroppedImageUrl  from '../services/image-url';


const GenreList = () => {

    const { data, isLoading, error } = useGenres();
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    if(error) return null;
    if(isLoading){
        return ( 
        <>
            {skeleton.map(skeleton =>             
                <SkeletonText key={skeleton} paddingY={3} />
            )}

        </>
        
        )

    }
  return (
    <>
        <List>
            {data.map(genre => 
            <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}></Image>
                    <Text fontSize='large'>{genre.name}</Text>
                </HStack>
            </ListItem>)}
        </List>
    </>
  )
}

export default GenreList