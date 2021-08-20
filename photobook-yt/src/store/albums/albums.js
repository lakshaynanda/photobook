import { createAlbum } from "../../graphql/mutations"
import { API,graphqlOperation } from 'aws-amplify'
import { createAlbum as createAlbumMutation } from "../../graphql/mutations"
import { getAlbum as getAlbumQuery } from '@/graphql/queries'
import { listAlbums as listAlbumsQuery } from '@/graphql/queries'

export const albumInfo = {
    namespaced: true,
    state: {
        albums: null
    },
    mutations: {
        setAlbums(state, payload) {
            state.albums = payload
        }
    },
    actions: {
        async createAlbum(_, newAlbum) {
            try {
                await API.graphql(graphqlOperation(createAlbumMutation, {input: newAlbum}))
            } catch (error) {
                console.error("createalbum", error)
            }
        },
        async getAlbum(_, albumId) {
            return await API.graphql(
                graphqlOperation(getAlbumQuery, {id: albumId})
            )
        }
    },
    getters: {

    }
}