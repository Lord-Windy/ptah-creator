
export function createDefaultValue() {
    return {
        Name: "",
        Value: ""
    }
}

export function createDefaultCharacter() {
    return {
        ID: -1,
        Name: "",
        Description: "",
        Values: []
    }

}

export function createDefaultFunction() {
    return {
        ID: -1,
        Name: "",
        Description: "",
        Values: []
    };
}

export function createDefaultChildNode() {
    return {
        childID: -1,
        ChoiceText: "",
        Description: "",
        Conditions: []
    }
}

export function createDefaultNode() {
    return {
        ID: -1,
        Title: "Title",
        Description: "",
        Dialogue: "",
        CharacterSpeaking: -1,
        Parent: -1,
        Children: [],
        Triggers: "", /**/
        X: 30,
        Y: 30

    };
}

export function createDefaultState() {
    return {
        RunningID: 0,
        ProjectName: "Place title here",
        Description: "The description",
        Author: "The Authors",
        Characters: [],
        Functions: [],
        Nodes: [],
    };
}