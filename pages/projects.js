import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { ProjectGridItem } from '../components/grid-item';

import thumbnailGhostDb from '../public/images/ghostdb.png';
import thumbnailRedact from '../public/images/redact.png';

const Projects = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <ProjectGridItem id="ghostdb" title="GhostDB" thumbnail={thumbnailGhostDb}>
                        GhostDB is a distributed, in-memory, general purpose key-value data store that delivers microsecond performance at any scale.
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="redact" title="Redact" thumbnail={thumbnailRedact}>
                        Redact is a native desktop application for redacting sensitive data in images.
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Projects