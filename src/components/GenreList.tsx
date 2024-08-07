
import useGenres, { Genre } from '../hooks/useGenres';
import { HStack, List, ListItem, Image, Text, Spinner, Card, CardBody, Skeleton, SkeletonText, Button, Heading } from '@chakra-ui/react';
import getCroppedImageUrl  from '../services/image-url';


interface Props{
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {

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
        <Heading marginBottom={3}>Genres</Heading>
        <List>
            {data.map(genre => 
            <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} objectFit='cover'></Image>
                    <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal' } variant='link' fontSize='large' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
    </>
  )
}

export default GenreList