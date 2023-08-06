import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent, Button,
} from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import {useDisclosure} from "@chakra-ui/react-use-disclosure";
import {DrawerCloseButton} from "@chakra-ui/modal";
import {Box} from "@chakra-ui/layout";
import {useNavigate} from "react-router";

export function SideBar() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const navigate = useNavigate();
    return (
        <>
            <Button
                onClick={onOpen} style={{backgroundColor: "white"}}
                m={4}> <i className="fa-solid fa-bars fa-xl"></i></Button>

            <Drawer onClose={onClose} isOpen={isOpen} size={'xs'} placement='left'>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>{`MENU`}</DrawerHeader>
                    <DrawerBody>
                        <a onClick={() => navigate("/")} style={{display: "flex", gap: "5px"}}><i style={{paddingLeft: "2px"}}
                                                                      className="fa-sharp fa-solid fa-house"/>
                            <a >
                                Home Page
                            </a>
                        </a>

                        <Accordion>
                            <AccordionItem>


                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Home, outdoor and equestrian
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {/*<NavLink to={navigate("/create")}>Blankets and pillows</NavLink>*/}
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                            Section 2 title
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>


                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}