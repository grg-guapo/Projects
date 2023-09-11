def bmr_cal(Weight, Height, Age, Gender):
    if Gender.lower() == 'male':
        bmr = 88.362 + (13.397 * Weight) + (4.799 * Height) - (5.677 * Age)
    elif Gender.lower() == 'female':
        bmr = 447.593 + (9.247 * Weight) + (3.098 * Height) - (4.330 * Age)
    else:
        print ("Gender should be 'male' or 'female'")
    
    return bmr

def main():
    print("Basal Metabolic Rate (BMR) Calculator:")
    Weight = float(input("\nEnter your weight in kilograms: "))
    Height = float(input("Enter your height in centimeters: "))
    Age = int(input("Enter your age in years: "))
    Gender = input("Enter your gender (male/female): ")

    bmr = bmr_cal(Weight, Height, Age, Gender)
    
    zero = int(bmr*1.2)
    low = int(bmr*1.375)
    medium = int(bmr*1.45)
    high = int(bmr*1.55)
    extreme = int(bmr*1.725)
    iron_man = int(bmr*1.9)


    print(f"\nYour BMR or Basal Metabolic Rate is {bmr} calories per day.")
    print(f"\nBelow is you daily caloric need based on activity level:")
    print(f"\nSedantary or minimum activity: {zero} calories per day.")
    print(f"Exercise 1-2 times a week: {low} calories per day.")
    print(f"Exercise 3-4 times a week: {medium} calories per day.")
    print(f"Daily exercise or intense exercise 3-4 times/week: {high} calories per day.")
    print(f"Intense exercise 6-7 times/week: {extreme} calories per day.")
    print(f"Very intense exercise daily, or physical job: {iron_man} calories per day.")

    print(f"\n-Exercise: 15-30 minutes of elevated heart rate activity.-")
    print(f"-Intense exercise: 45-120 minutes of elevated heart rate activity.-")
    print(f"-2+ hours of elevated heart rate activity.--")
    print(" ")

if __name__ == "__main__":
    main()


#https://replit.com/@gurungsj/BMR-Calculator#main.py