/// <reference types="Cypress" />

import { SnapshotNames } from '../snapshots/snapshot-names';

context('Sign Up', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });

  it('Sign Up Page Snapshot', function() {
    cy.percySnapshot(SnapshotNames.signup);
  });
});
