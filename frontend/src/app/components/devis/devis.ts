import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Meta } from '@angular/platform-browser';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FadeInOnLoadDirective } from '../../directives/fade-in-on-load';

@Component({
  selector: 'app-devis',
  imports: [Header, Footer, ReactiveFormsModule, CommonModule, FadeInOnLoadDirective],
  templateUrl: './devis.html',
  styleUrl: './devis.css'
})
export class Devis implements OnInit {
  currentStep: number = 1;
  devisForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  constructor(private meta: Meta, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.meta.addTags([
      { name: 'description', content: 'faites vous votre demande pour un devis ici' },
      { name: 'keywords', content: 'service, contact, devis' },
    ]);
    this.devisForm = this.fb.group({
      // Étape 1 : Informations personnelles
      personal: this.fb.group({
        nom: ['', Validators.required],
        prenom: [''],
        email: ['', [Validators.required, Validators.email]],
        telephone: [''],
        typeEntreprise: ['', Validators.required],
        localisation: ['', Validators.required]
      }),
      // Étape 2 : Détails du projet
      project: this.fb.group({
        sujet: ['', Validators.required],
        description: ['', Validators.required],
        budget: ['', Validators.required],
        delai: ['', Validators.required],
      }),
      confirmation: this.fb.group({
        acceptTerms: [false, Validators.requiredTrue],
        confirmationMessage: ['']
      }),
    });
  }

  get personal() { return (this.devisForm.get('personal') as FormGroup); }
  get project() { return (this.devisForm.get('project') as FormGroup); }
  get confirmation() { return (this.devisForm.get('confirmation') as FormGroup); }

  nextStep() 
  {
    if (this.isStepValid(this.currentStep)) {
      this.currentStep++;
    } else {
      this.markStepTouched(this.currentStep);
    }
  }

  prevStep() 
  {
    if (this.currentStep > 1) this.currentStep--;
  }

  isStepValid(step: number): boolean 
  {
    switch (step) {
      case 1: return this.personal.valid;
      case 2: return this.project.valid;
      case 3: return this.confirmation.valid;
      default: return false;
    }
  }

  markStepTouched(step: number) {
    switch (step) {
      case 1: this.personal.markAllAsTouched(); break;
      case 2: this.project.markAllAsTouched(); break;
      case 3: this.confirmation.markAllAsTouched(); break;
    }
  }

  onSubmit() 
  {
    if (this.currentStep < 3) {
      // Si on n'est pas à la dernière étape, on passe à l'étape suivante
      this.nextStep();
      this.errorMessage = null;
      this.successMessage = null;
      return;
    }
    // Si on est à la dernière étape, on valide tout le formulaire
    if (this.devisForm.valid) 
    {
      this.successMessage = "demande de devis envoyée avec succès !";
      this.errorMessage = null;
    } 
    else
    {
      this.errorMessage = 'Le formulaire est invalide.';
      this.successMessage = null;
      this.markStepTouched(this.currentStep);
    }
  }

  resetForm() {
    this.devisForm.reset();
    this.currentStep = 1;
    this.successMessage = null;
    this.errorMessage = null;
  }
  goHome() {
    this.router.navigate(['/']);
  }
}
