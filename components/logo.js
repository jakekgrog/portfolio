import Link from 'next/link';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

const LogoBox = styled.span`
font-weight: bold;
font-size: 30px;
display: inline-flex;
align-item: center;
height: 30px;
line-height: 24px;
padding: 10px;
`

const Logo = () => {
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                      fontFamily='PT Serif, serif'
                      ml={3}
                    >
                        Jake Grogan
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo