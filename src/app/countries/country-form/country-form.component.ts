import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators,} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Continent} from 'src/app/shared/models/continent';
import {CountriesService} from 'src/app/shared/services/countries.service';
import {ContinentsService} from 'src/app/shared/services/continents.service';
import {Country} from "../../shared/models/country";

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  constructor(private router: Router,
              private fb: FormBuilder,
              private countryService: CountriesService,
              private continentService: ContinentsService,
              private route: ActivatedRoute) {
  }

  isEditing = false;
  continents: Array<Continent> = [];

  countryForm: FormGroup = this.fb.group({
    id: null,
    name: [null, [Validators.required]],
    continent: null,
    active: null
  })

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.isEditing = true;
        this.countryService.getCountryById(params.id).subscribe((data: any) => {
          this.countryForm.patchValue({
            id: data.id,
            name: data.name,
            continent: data.continent.id,
            active: data.active
          });
        })
      }
    });
    this.getContinents();
  }

  onSubmit(): void {
    if (this.countryForm.valid) {
      if (this.isEditing) {

        this.countryService.updateCountry(new Country(this.countryForm.get('id').value, this.countryForm.get('name').value, this.getContinent(this.countryForm.get('continent').value), this.countryForm.get('active').value)).subscribe(() => {
          this.countryForm.reset();
          this.router.navigate(['/countries'])
        })
      } else {
        this.countryService.addCountry(new Country(this.countryForm.get('id').value, this.countryForm.get('name').value, this.getContinent(this.countryForm.get('continent').value), this.countryForm.get('active').value)).subscribe(() => {
          this.router.navigate(['/countries'])
        })
      }
    } else {
      alert("saving/updating failed!!!")
    }
  }

  getContinents() {
    this.continentService.getAllContinents().subscribe((data: Array<Continent>): void => {
      this.continents = data;
    })
  }

  getContinent(id): Continent {
    let result = null;
    this.continents.forEach(value => {
      if (value.id == id) {
        result = value;
      }
    });

    return result;
  }
}
