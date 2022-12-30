const { assertFails, assertSucceeds, initializeTestEnvironment } = require('@firebase/rules-unit-testing')
const { getDoc, setDoc, addDoc, deleteDoc, collection } = require('@firebase/firestore')
const fs = require('fs');

import {describe, expect, test} from '@jest/globals';


describe("Test firestore security rules", () => {

  test('Understands basic addition',() => {
    expect(2+2).toBe(4)
  })



  // let testEnv;

  // beforeAll(async () => {
  //   testEnv = await initializeTestEnvironment({
  //     projectId: 'makapela-chords',
  //     rules: fs.readFileSync('firestore.rules', { 'encoding': 'utf-8' }),
  //     host: 'localhost',
  //     port: '8080'
  //   }).then(resultTestEnv => {
  //     return resultTestEnv
  //   }).catch(error => {
  //     console.error(error)
  //   })



  //   const myUser = {userId: 'myId', userName: 'My Name'}
  //   let usersRef = collection(ctx)
  // })

  // beforeEach
})
