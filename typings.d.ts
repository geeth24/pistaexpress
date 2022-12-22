interface Image {
    asset: {
        url: string
    }
}

export interface HomeData {
    title: string
    subtitle: string
    description: string
    homeImage: Image
}
