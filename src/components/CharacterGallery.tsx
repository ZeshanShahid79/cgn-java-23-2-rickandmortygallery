import {Character} from "../../../cgn-23-2-rickandmortygallery/src/Character";
import CharacterCard from "./CharacterCard";
import './CharacterGallery.css'
import React from "react";

type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterGallery(props: CharacterGalleryProps) {

    return (
        <div className={"character-gallery"}>
            {props.characters.map((character) => <CharacterCard character={character} key={character.id}/>)}
        </div>
    )
}
